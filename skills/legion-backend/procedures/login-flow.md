# Login Flow

> Legion procedure `login-flow` · pack **Backend Development** (`legion-backend`)

## When to use
Implement signup, login, logout, password reset and email verification with secure sessions or a managed auth provider. Use when an app needs user accounts.

## Procedure
1. Prefer a managed provider or well-maintained library.
2. Hash passwords with argon2 or bcrypt; never store plaintext.
3. Use secure, httpOnly, sameSite cookies or short-lived tokens with refresh rotation.
4. Implement reset and verification with single-use, expiring tokens.
5. Rate-limit and log auth events.

## Quality checklist
- [ ] Passwords hashed
- [ ] tokens expire
- [ ] generic error messages avoid user enumeration

## Output
Auth flow code and tests.
