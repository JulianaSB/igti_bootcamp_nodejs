import AccountResolver from "../resolvers/account.resolver.js";
import Account from "../types/account.type.js";
import AccountInput from "../types/accountInput.type.js";
import pkg from 'graphql';
const { GraphQLInt } = pkg;

const accountMutation = {
    createAccount: {
        type: Account,
        args: {
            account: {
                name: "account",
                type: AccountInput
            }
        },
        resolve(_, args) {
            return AccountResolver.createAccount(args.account);
        }
    },
    deleteAccount: {
        type: Account,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve(_, args) {
            return AccountResolver.deleteAccount(args.id);
        }
    },
    updateAccount: {
        type: Account,
        args: {
            account: {
                name: "account",
                type: AccountInput
            }
        },
        resolve(_, args) {
            return AccountResolver.updateAccount(args.account);
        }
    }
};

export default accountMutation;