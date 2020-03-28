const { Profile } = require('./models');

const resolvers = {
    Query: {
        profiles: async (parent, args, context) => {
            return await Profile.find();
        }
    },
    Mutation: {
        postProfile: async (parent, args) => {
            let profile = new Profile({
                ...args.input
            });
            if (args.input.id) {
                profile = Profile.findOne({id: args.input.id});
            }
            return await profile.save();
        },
        removeProfile: async (parent, args, context) => {
            await Profile.deleteOne({id: args.id});
            return true;
        }
    }
};

module.exports = resolvers;
