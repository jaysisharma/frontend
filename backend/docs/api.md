# Tukatuu API Documentation

Base URL: `http://localhost:5000/api`

## Endpoints

### 1. Waitlist Registration

**POST /waitlist**
Register email for early access.

Request:
```json
{
  "email": "user@example.com"
}
```

Response:
```json
{
  "success": true,
  "message": "Successfully joined the waitlist",
  "data": {
    "email": "user@example.com",
    "joinedAt": "2025-05-06T10:00:00Z",
    "id": "WL003"
  }
}
```

### 2. Job Applications

**POST /applications**
Submit a job application.

Request:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1-234-567-8900",
  "university": "Harvard University",
  "degree": "Bachelor of Computer Science",
  "skills": "React, Node.js, MongoDB, Express",
  "motivation": "I am passionate about creating innovative solutions...",
  "resumeUrl": "https://example.com/john-resume.pdf",
  "position": "UI/UX Intern"
}
```

Response:
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "id": "APP003",
    "status": "pending",
    "appliedAt": "2025-05-06T10:00:00Z"
  }
}
```

**GET /applications/:id**
Get application status.

Response:
```json
{
  "success": true,
  "data": {
    "id": "APP001",
    "status": "pending",
    "position": "UI/UX Intern",
    "appliedAt": "2025-05-01T10:30:00Z"
  }
}
```

### 3. Contact Form

**POST /contact**
Submit contact form.

Request:
```json
{
  "name": "Michael Johnson",
  "email": "michael@example.com",
  "message": "Interested in your delivery services for my restaurant chain"
}
```

Response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "id": "CON003",
    "submittedAt": "2025-05-06T10:00:00Z"
  }
}
```

## Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "error": "Error message description"
}
```

Common HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error