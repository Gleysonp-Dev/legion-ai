# File Uploads

> Legion procedure `file-uploads` · pack **Backend Development** (`legion-backend`)

## When to use
Implement file uploads safely: presigned URLs, size/type limits, virus scanning, image processing and storage. Use for avatars, documents or media uploads.

## Procedure
1. Upload directly to object storage with presigned URLs.
2. Enforce size limits and validate content type by magic bytes, not extension.
3. Store files with random keys; never trust user filenames.
4. Process images (resize, strip metadata) asynchronously.
5. Serve through a CDN with correct access control.

## Quality checklist
- [ ] Limits enforced server-side
- [ ] filenames sanitised
- [ ] private files not public

## Output
Upload flow code and storage configuration.
