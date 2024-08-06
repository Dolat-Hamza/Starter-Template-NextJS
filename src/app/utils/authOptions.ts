import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                const user = {id: "25", name: "J Smith", password: "12345678"};

                if (
                    credentials?.username === user.name &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else {
                    return null;
                }
            }
        }),
    ],
};
