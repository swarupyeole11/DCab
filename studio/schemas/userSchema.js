export const userSchema = { /* represents any of the users that lgo in */
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'walletAddress',
        type: 'string',
        title: 'Wallet Address',
      },
      {
        name: 'profileImage',
        type: 'image',
        title: 'Profile Image',
      },
    ],
  }
