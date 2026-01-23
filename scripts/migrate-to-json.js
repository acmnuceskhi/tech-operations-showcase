#!/usr/bin/env node

/**
 * Data Migration Script for Tina CMS
 *
 * Converts existing JavaScript data files to JSON format for Tina CMS.
 * - Removes computed fields (profileLink, link)
 * - Maps React icon components to string identifiers
 * - Creates individual JSON files in /content directory structure
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ES modules require this for __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Import existing data
const rootDir = path.join(__dirname, '..')
const dataDir = path.join(rootDir, 'src', 'data')

// Dynamically import the data modules
async function loadData() {
  const membersModule = await import(path.join(dataDir, 'members.js'))
  const projectsModule = await import(path.join(dataDir, 'projects.js'))
  const logosModule = await import(path.join(dataDir, 'logos.js'))

  return {
    members: membersModule.default,
    projects: projectsModule.default,
    techStack: logosModule.default
  }
}

/**
 * Map icon component to string identifier
 */
function mapIconToString(iconComponent) {
  const iconName = iconComponent.name

  // Determine library based on icon name prefix
  if (iconName.startsWith('Fa')) {
    return {
      iconName: iconName,
      iconLibrary: 'fa'
    }
  } else if (iconName.startsWith('Si')) {
    return {
      iconName: iconName,
      iconLibrary: 'si'
    }
  }

  // Fallback
  console.warn(`Unknown icon library for ${iconName}`)
  return {
    iconName: iconName,
    iconLibrary: 'fa'
  }
}

/**
 * Transform member data
 */
function transformMember(member) {
  const { profileLink, ...rest } = member
  return rest
}

/**
 * Transform project data
 */
function transformProject(project) {
  const { link, ...rest } = project
  return rest
}

/**
 * Transform tech stack data
 */
function transformTechStack(tech) {
  const { icon, ...rest } = tech
  const iconMapping = mapIconToString(icon)

  return {
    ...rest,
    ...iconMapping
  }
}

/**
 * Create directory if it doesn't exist
 */
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

/**
 * Write JSON file
 */
function writeJsonFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n')
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('🚀 Starting data migration...\n')

  try {
    // Load existing data
    const { members, projects, techStack } = await loadData()

    // Create content directories
    const contentDir = path.join(rootDir, 'content')
    const membersDir = path.join(contentDir, 'members')
    const projectsDir = path.join(contentDir, 'projects')
    const techStackDir = path.join(contentDir, 'tech-stack')

    ensureDir(membersDir)
    ensureDir(projectsDir)
    ensureDir(techStackDir)

    // Migrate members
    console.log('📝 Migrating members...')
    members.forEach(member => {
      const transformed = transformMember(member)
      const filename = `${member.id}.json`
      const filePath = path.join(membersDir, filename)
      writeJsonFile(filePath, transformed)
      console.log(`  ✅ Created ${filename}`)
    })

    // Migrate projects
    console.log('\n📝 Migrating projects...')
    projects.forEach(project => {
      const transformed = transformProject(project)
      const filename = `${project.id}.json`
      const filePath = path.join(projectsDir, filename)
      writeJsonFile(filePath, transformed)
      console.log(`  ✅ Created ${filename}`)
    })

    // Migrate tech stack
    console.log('\n📝 Migrating tech stack...')
    techStack.forEach((tech, index) => {
      const transformed = transformTechStack(tech)
      // Use index + 1 as ID since tech stack doesn't have IDs
      const filename = `${index + 1}.json`
      const filePath = path.join(techStackDir, filename)
      writeJsonFile(filePath, transformed)
      console.log(`  ✅ Created ${filename} (${tech.name})`)
    })

    console.log('\n✨ Migration completed successfully!')
    console.log(`\n📊 Summary:`)
    console.log(`   - Members: ${members.length} files`)
    console.log(`   - Projects: ${projects.length} files`)
    console.log(`   - Tech Stack: ${techStack.length} files`)

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run migration
migrate()
