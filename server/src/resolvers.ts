import { prisma } from "./prisma"

export const resolvers = {
  Query: {
    users: async () => {
      const users = await prisma.user.findMany()
      return users
    },
    user: async (_: any, { id }: { id: string }) => {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      })

      if (!user) {
        throw new Error('User not found')
      }

      return user
    },

    posts: async () => {
      const posts = await prisma.post.findMany()
      return posts
    },
    post: async (_: any, { id }: { id: string }) => {
      const post = await prisma.post.findUnique({
        where: {
          id
        }
      })

      if (!post) {
        throw new Error('Post not found')
      }

      return post
    }
  },

  Mutation: {
    createUser: async (_: any, { email, bio, password }: { email: string, bio: string, password: string }) => {
      const user = await prisma.user.create({
        data: {
          email,
          bio,
          password
        }
      })

      return user
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      await prisma.user.delete({
        where: {
          id
        },
      })

      return 'User deleted successfully'
    },

    createPost: async (_: any, { userId, title, content }: any) => {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          userId
        },
        include: {
          User: true
        }
      })

      return post
    },
    deletePost: async (_: any, { id}: { id: string }) => {
      await prisma.post.delete({
        where: {
          id
        }
      })

      return 'Post deleted successfully'
    }
  }
}