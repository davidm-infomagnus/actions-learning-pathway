# Developer Assignments

This document describes the developer assignments tracking system implemented in this repository.

## Overview

The developer assignments system helps the company review where each developer is assigned. It consists of:

1. **Data File**: `data/developer-assignments.json` - Contains the current developer assignments
2. **API Endpoint**: `/api/developers` - Returns the developer assignments data
3. **Web Interface**: `/developers` - Displays developer assignments in a user-friendly format
4. **Validation Workflow**: `.github/workflows/validate-developer-assignments.yml` - Validates the assignments file

## Data Structure

The `developer-assignments.json` file contains:

```json
{
  "developers": [
    {
      "id": "dev001",
      "name": "Developer Name",
      "email": "email@company.com",
      "assignments": [
        {
          "project": "Project Name",
          "role": "Developer Role",
          "areas": ["Area 1", "Area 2"]
        }
      ]
    }
  ],
  "lastUpdated": "YYYY-MM-DD"
}
```

## Updating Assignments

To update developer assignments:

1. Edit the `data/developer-assignments.json` file
2. Update the `lastUpdated` field to the current date
3. Commit and push your changes
4. The validation workflow will automatically check the file format

## Viewing Assignments

### Web Interface

Visit `/developers` page to view all developer assignments in a user-friendly format.

### API Endpoint

Access the API at `/api/developers` to retrieve the assignments data programmatically.

### Command Line

You can also view assignments directly from the command line:

```bash
cat data/developer-assignments.json | jq
```

## Validation

The GitHub Actions workflow validates:
- JSON format is valid
- Required fields are present (developers array, lastUpdated)
- Each developer has required fields (id, name, email, assignments)
- Displays a summary of assignments

## Example Usage

Run the Next.js development server to view the assignments page:

```bash
npm run dev
```

Then navigate to `http://localhost:3000/developers`
