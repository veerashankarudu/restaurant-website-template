// Authentication service for admin panel
export interface AdminUser {
  email: string
  password: string
  resetToken?: string
  resetTokenExpiry?: number
}

class AuthService {
  private readonly STORAGE_KEY = 'restaurant-admin-user'
  private readonly RESET_TOKEN_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

  // Initialize default admin user
  constructor() {
    this.initializeDefaultAdmin()
  }

  private initializeDefaultAdmin() {
    const existingAdmin = this.getAdminUser()
    if (!existingAdmin) {
      // Create default admin account
      const defaultAdmin: AdminUser = {
        email: 'admin@restaurant.com',
        password: 'admin123' // In production, this should be hashed
      }
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(defaultAdmin))
    }
  }

  private getAdminUser(): AdminUser | null {
    const userData = localStorage.getItem(this.STORAGE_KEY)
    if (userData) {
      try {
        return JSON.parse(userData)
      } catch (error) {
        console.error('Error parsing admin user data:', error)
      }
    }
    return null
  }

  private saveAdminUser(user: AdminUser) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user))
  }

  // Login functionality
  login(email: string, password: string): { success: boolean; message: string } {
    const adminUser = this.getAdminUser()
    
    if (!adminUser) {
      return { success: false, message: 'Admin account not found' }
    }

    if (adminUser.email.toLowerCase() === email.toLowerCase() && adminUser.password === password) {
      // Store login session
      sessionStorage.setItem('admin-logged-in', 'true')
      sessionStorage.setItem('admin-email', email)
      return { success: true, message: 'Login successful' }
    }

    return { success: false, message: 'Invalid email or password' }
  }

  // Check if admin is logged in
  isLoggedIn(): boolean {
    return sessionStorage.getItem('admin-logged-in') === 'true'
  }

  // Logout
  logout() {
    sessionStorage.removeItem('admin-logged-in')
    sessionStorage.removeItem('admin-email')
  }

  // Get current admin email
  getCurrentAdminEmail(): string | null {
    return sessionStorage.getItem('admin-email')
  }

  // Forgot password - generate reset token
  generateResetToken(email: string): { success: boolean; message: string; token?: string } {
    const adminUser = this.getAdminUser()
    
    if (!adminUser || adminUser.email.toLowerCase() !== email.toLowerCase()) {
      return { success: false, message: 'Email address not found' }
    }

    // Generate a simple reset token (in production, use crypto.randomBytes or similar)
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    const tokenExpiry = Date.now() + this.RESET_TOKEN_EXPIRY

    // Save reset token
    adminUser.resetToken = token
    adminUser.resetTokenExpiry = tokenExpiry
    this.saveAdminUser(adminUser)

    // Simulate email sending (in production, integrate with email service)
    this.simulateEmailSending(email, token)

    return { 
      success: true, 
      message: 'Password reset link has been sent to your email address',
      token // In production, don't return token in response
    }
  }

  // Simulate email sending (for demo purposes)
  private simulateEmailSending(email: string, token: string) {
    const resetLink = `${window.location.origin}/admin/reset-password?token=${token}`
    
    console.log('📧 EMAIL SIMULATION:')
    console.log('To:', email)
    console.log('Subject: Password Reset - Restaurant Admin')
    console.log('Reset Link:', resetLink)
    console.log('This link expires in 24 hours.')
    
    // For demo purposes, show an alert with the reset link
    setTimeout(() => {
      alert(`📧 Password reset email sent!\n\nFor demo purposes, here's your reset link:\n${resetLink}\n\nIn production, this would be sent to ${email}`)
    }, 1000)
  }

  // Verify reset token
  verifyResetToken(token: string): { valid: boolean; email?: string } {
    const adminUser = this.getAdminUser()
    
    if (!adminUser || !adminUser.resetToken || !adminUser.resetTokenExpiry) {
      return { valid: false }
    }

    if (adminUser.resetToken === token && Date.now() < adminUser.resetTokenExpiry) {
      return { valid: true, email: adminUser.email }
    }

    return { valid: false }
  }

  // Reset password with token
  resetPassword(token: string, newPassword: string): { success: boolean; message: string } {
    const verification = this.verifyResetToken(token)
    
    if (!verification.valid) {
      return { success: false, message: 'Invalid or expired reset token' }
    }

    const adminUser = this.getAdminUser()
    if (adminUser) {
      // Update password and clear reset token
      adminUser.password = newPassword
      adminUser.resetToken = undefined
      adminUser.resetTokenExpiry = undefined
      this.saveAdminUser(adminUser)

      return { success: true, message: 'Password has been reset successfully' }
    }

    return { success: false, message: 'Error resetting password' }
  }

  // Change password (when logged in)
  changePassword(currentPassword: string, newPassword: string): { success: boolean; message: string } {
    const adminUser = this.getAdminUser()
    
    if (!adminUser) {
      return { success: false, message: 'Admin account not found' }
    }

    if (adminUser.password !== currentPassword) {
      return { success: false, message: 'Current password is incorrect' }
    }

    adminUser.password = newPassword
    this.saveAdminUser(adminUser)

    return { success: true, message: 'Password changed successfully' }
  }
}

export const authService = new AuthService()