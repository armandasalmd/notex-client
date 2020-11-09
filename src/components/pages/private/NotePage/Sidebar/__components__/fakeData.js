const fakeData = {
    notebooks: [
        {
            _id: "5e8496e1bbb6a44844f683d2",
            title: "Private notebook",
            owner: "armandas.bark@gmail.com",
            notes: [
                {
                    text: "### This is quick intro",
                    accessLevel: "private",
                    _id: "5e8496e1bbb6a44844f683d4",
                    title: "Quick intro",
                    creationDate: { $date: { $numberLong: "1585747681835" } }
                },
                {
                    text: "Find a way to delete mssse :)s",
                    accessLevel: "private",
                    _id: "5e8496e1bbb6a44844f683d3",
                    title: "Try to delete me",
                    creationDate: { $date: { $numberLong: "1585747681835" } }
                },
                {
                    text:
                        "## Node auth with Google oAuth: part 1 (session based)\n\n#### The problem\n\nComes with a number of obstacles:\n\n1. It's a lot of work\n\n    - Must store salted/ encrypted user password securely in database\n    - Must help users reset their passwords when they forget\n    - Have to write fullstack code\n\n1. Your users have to create new account and remeber new login credentials\n\n1. Someone can now steal your hashed passwords\n\n#### The solution\n\nYou can set your site up so that any time a user wants to sign in, they get redirected to another site (eg. Google, Facebook, Github, Twitter, or many others), then that site can come back and say \"Margaret? Yeah we know Margaret. She's cool.\" And boom, now you can log Margaret into your site without you EVER having to see or worry about her password.\n\n#### Great tutorial links:\n\n[Sample google login website](https://auth-barkausa.herokuapp.com/#)\n\n1.  [Session based google auth](http://gregtrowbridge.com/node-authentication-with-google-oauth-part1-sessions/)\n1.  [JWT based google auth](http://gregtrowbridge.com/node-authentication-with-google-oauth-part2-jwts/)\n1.  [Intro to refresh tokens](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)\n",
                    accessLevel: "private",
                    _id: "5e94523b45701610507cea4e",
                    title: "Auth0",
                    creationDate: { $date: { $numberLong: "1586778683774" } }
                }
            ],
            __v: { $numberInt: "2" }
        },
        {
            _id: "5e84a7d114a50c3e7c6ee092",
            title: "Hello world notebook",
            owner: "armandas.bark2@gmail.com",
            notes: [
                {
                    text: "### This is quick intro",
                    accessLevel: "private",
                    _id: "5e84a7d114a50c3e7c6ee094",
                    title: "Quick intro",
                    creationDate: { $date: { $numberLong: "1585752017074" } }
                },
                {
                    text: "Find a way to delete me :)",
                    accessLevel: "private",
                    _id: "5e84a7d114a50c3e7c6ee093",
                    title: "Try to delete me",
                    creationDate: { $date: { $numberLong: "1585752017073" } }
                }
            ],
            __v: { $numberInt: "0" }
        },
        {
            _id: "5e85da95ea4ac504bc6664aa",
            notes: [
                {
                    text: "### Khalilstemmler\n- Creation date: Thu Apr 02 2020 13:29:09 GMT+0100 (British Summer Time)\n- Author: Test` Torn",
                    accessLevel: "private",
                    _id: "5e85da95ea4ac504bc6664ab",
                    title: "README",
                    creationDate: { $date: { $numberLong: "1585830549797" } }
                }
            ],
            title: "Khalilstemmler",
            owner: "test@gmail.com",
            __v: { $numberInt: "0" }
        }
    ]
};

export default fakeData;
