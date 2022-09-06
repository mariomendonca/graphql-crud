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

      return user
    }
  },

  Mutation: {
    create: async (_: any, { email, bio, password }: { email: string, bio: string, password: string }) => {
      const user = await prisma.user.create({
        data: {
          email,
          bio,
          password
        }
      })

      return user
    },
    delete: async (_: any, { id }: { id: string }) => {
      await prisma.user.delete({
        where: {
          id
        }
      })

      return 'User deleted successfully'
    }
  }
}