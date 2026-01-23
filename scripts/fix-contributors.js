#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectsDir = path.join(__dirname, '..', 'content', 'projects')

// Read all project files and convert contributors to strings
const files = fs.readdirSync(projectsDir)

files.forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(projectsDir, file)
    const project = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    // Convert contributors to strings
    if (project.contributors && Array.isArray(project.contributors)) {
      project.contributors = project.contributors.map(id => String(id))
    }

    // Write back
    fs.writeFileSync(filePath, JSON.stringify(project, null, 2) + '\n')
    console.log(`✅ Updated ${file}`)
  }
})

console.log('\n✨ All project files updated!')
