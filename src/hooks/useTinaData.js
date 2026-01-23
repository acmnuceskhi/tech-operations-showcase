/**
 * Tina CMS Data Hooks
 *
 * Custom React hooks for fetching data from Tina CMS.
 * These hooks fetch data via GraphQL and add computed fields where needed.
 */

import { useState, useEffect } from 'react'
import client from '../tina/client'

/**
 * Hook to fetch all members from Tina CMS
 * @returns {{ members: Array, loading: boolean, error: Error|null }}
 */
export function useMembers() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchMembers() {
      try {
        setLoading(true)
        const result = await client.queries.membersConnection()

        if (result.data?.membersConnection?.edges) {
          const membersData = result.data.membersConnection.edges.map(edge => {
            const member = edge.node
            // Add computed profileLink field
            return {
              ...member,
              profileLink: `/member/${member.id}`
            }
          })
          setMembers(membersData)
        }
      } catch (err) {
        console.error('Error fetching members:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMembers()
  }, [])

  return { members, loading, error }
}

/**
 * Hook to fetch all projects from Tina CMS
 * @returns {{ projects: Array, loading: boolean, error: Error|null }}
 */
export function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true)
        const result = await client.queries.projectsConnection()

        if (result.data?.projectsConnection?.edges) {
          const projectsData = result.data.projectsConnection.edges.map(edge => {
            const project = edge.node
            // Convert contributors from strings back to numbers
            const contributors = (project.contributors || []).map(id => parseInt(id, 10))
            // Add computed link field
            return {
              ...project,
              contributors,
              link: `/project/${project.id}`
            }
          })
          setProjects(projectsData)
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

/**
 * Hook to fetch all tech stack items from Tina CMS
 * @returns {{ techStack: Array, loading: boolean, error: Error|null }}
 */
export function useTechStack() {
  const [techStack, setTechStack] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTechStack() {
      try {
        setLoading(true)
        const result = await client.queries.techStackConnection()

        if (result.data?.techStackConnection?.edges) {
          const techStackData = result.data.techStackConnection.edges.map(edge => edge.node)
          setTechStack(techStackData)
        }
      } catch (err) {
        console.error('Error fetching tech stack:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchTechStack()
  }, [])

  return { techStack, loading, error }
}
