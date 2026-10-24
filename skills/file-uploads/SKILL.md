---
name: file-uploads
description: "Implement file uploads safely: presigned URLs, size/type limits, virus scanning, image processing and storage. Use for avatars, documents or media uploads."
---
# File Uploads

> Legion skill · category **Backend Development**

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

## Works well with
Legion agents: `backend-engineer`, `integration-engineer`, `auth-specialist`. For large or multi-part work, hand the task to the `legion` skill so the conductor can split it across agents.

## Personalisation
If `~/.legion/memory/profile.md` exists, apply the user's recorded preferences (language, tone, formats, stack) to this procedure.
