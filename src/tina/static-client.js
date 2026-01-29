/**
 * Static TinaCMS Client
 *
 * A client that reads data directly from JSON files instead of using GraphQL.
 * This allows the site to work without TinaCloud or a running GraphQL server.
 */

// Import all JSON data files
import membersData from '../../content/members/1.json' with { type: 'json' };
import member2 from '../../content/members/2.json' with { type: 'json' };
import member3 from '../../content/members/3.json' with { type: 'json' };
import member4 from '../../content/members/4.json' with { type: 'json' };
import member5 from '../../content/members/5.json' with { type: 'json' };
import member6 from '../../content/members/6.json' with { type: 'json' };
import member7 from '../../content/members/7.json' with { type: 'json' };
import member8 from '../../content/members/8.json' with { type: 'json' };
import member9 from '../../content/members/9.json' with { type: 'json' };
import member10 from '../../content/members/10.json' with { type: 'json' };
import member11 from '../../content/members/11.json' with { type: 'json' };
import member12 from '../../content/members/12.json' with { type: 'json' };
import member13 from '../../content/members/13.json' with { type: 'json' };
import member14 from '../../content/members/14.json' with { type: 'json' };
import member15 from '../../content/members/15.json' with { type: 'json' };
import member16 from '../../content/members/16.json' with { type: 'json' };

import project1 from '../../content/projects/1.json' with { type: 'json' };
import project2 from '../../content/projects/2.json' with { type: 'json' };
import project3 from '../../content/projects/3.json' with { type: 'json' };
import project4 from '../../content/projects/4.json' with { type: 'json' };
import project5 from '../../content/projects/5.json' with { type: 'json' };
import project6 from '../../content/projects/6.json' with { type: 'json' };
import project7 from '../../content/projects/7.json' with { type: 'json' };
import project8 from '../../content/projects/8.json' with { type: 'json' };

import techStack1 from '../../content/tech-stack/1.json' with { type: 'json' };
import techStack2 from '../../content/tech-stack/2.json' with { type: 'json' };
import techStack3 from '../../content/tech-stack/3.json' with { type: 'json' };
import techStack4 from '../../content/tech-stack/4.json' with { type: 'json' };
import techStack5 from '../../content/tech-stack/5.json' with { type: 'json' };
import techStack6 from '../../content/tech-stack/6.json' with { type: 'json' };
import techStack7 from '../../content/tech-stack/7.json' with { type: 'json' };
import techStack8 from '../../content/tech-stack/8.json' with { type: 'json' };
import techStack9 from '../../content/tech-stack/9.json' with { type: 'json' };
import techStack10 from '../../content/tech-stack/10.json' with { type: 'json' };
import techStack11 from '../../content/tech-stack/11.json' with { type: 'json' };
import techStack12 from '../../content/tech-stack/12.json' with { type: 'json' };
import techStack13 from '../../content/tech-stack/13.json' with { type: 'json' };
import techStack14 from '../../content/tech-stack/14.json' with { type: 'json' };
import techStack15 from '../../content/tech-stack/15.json' with { type: 'json' };
import techStack16 from '../../content/tech-stack/16.json' with { type: 'json' };
import techStack17 from '../../content/tech-stack/17.json' with { type: 'json' };
import techStack18 from '../../content/tech-stack/18.json' with { type: 'json' };
import techStack19 from '../../content/tech-stack/19.json' with { type: 'json' };
import techStack20 from '../../content/tech-stack/20.json' with { type: 'json' };
import techStack21 from '../../content/tech-stack/21.json' with { type: 'json' };
import techStack22 from '../../content/tech-stack/22.json' with { type: 'json' };
import techStack23 from '../../content/tech-stack/23.json' with { type: 'json' };
import techStack24 from '../../content/tech-stack/24.json' with { type: 'json' };

// Organize data
const allMembers = [
  membersData, member2, member3, member4, member5, member6, member7, member8, member9,
  member10, member11, member12, member13, member14, member15, member16
];

const allProjects = [project1, project2, project3, project4, project5, project6, project7, project8];

const allTechStack = [
  techStack1, techStack2, techStack3, techStack4, techStack5, techStack6, techStack7, techStack8, techStack9,
  techStack10, techStack11, techStack12, techStack13, techStack14, techStack15, techStack16, techStack17,
  techStack18, techStack19, techStack20, techStack21, techStack22, techStack23, techStack24
];

// Create a static client that mimics TinaCMS GraphQL responses
export const client = {
  queries: {
    membersConnection: async () => ({
      data: {
        membersConnection: {
          edges: allMembers.map((member, index) => ({
            node: {
              ...member,
              id: `content/members/${index + 1}.json`
            }
          }))
        }
      }
    }),

    projectsConnection: async () => ({
      data: {
        projectsConnection: {
          edges: allProjects.map((project, index) => ({
            node: {
              ...project,
              id: `content/projects/${index + 1}.json`
            }
          }))
        }
      }
    }),

    techStackConnection: async () => ({
      data: {
        techStackConnection: {
          edges: allTechStack.map((tech, index) => ({
            node: {
              ...tech,
              id: `content/tech-stack/${index + 1}.json`
            }
          }))
        }
      }
    })
  }
};

export default client;