module.exports = {

"[project]/src/utils/create-test-users.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Test Users Creation Utility
// This is a one-time utility to create test users programmatically
__turbopack_context__.s({
    "createTestUsers": ()=>createTestUsers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ngaqitxsryhsjlrgogpa.supabase.co");
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseServiceKey);
async function createTestUsers() {
    const testUsers = [
        {
            email: 'alice@example.com',
            password: 'password123',
            profile: {
                display_name: 'Alice Johnson',
                title: 'Software Engineer',
                superpower: 'Building scalable web applications with React and Node.js. I love creating intuitive user experiences and solving complex technical challenges.',
                ask: 'Looking to connect with product managers and designers who are passionate about user-centered design and rapid prototyping.',
                linkedin: 'https://linkedin.com/in/alice-johnson',
                profile_image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
                wants_meet: true
            }
        },
        {
            email: 'bob@example.com',
            password: 'password123',
            profile: {
                display_name: 'Bob Smith',
                title: 'Product Manager',
                superpower: 'Translating complex business requirements into clear product roadmaps. I excel at stakeholder management and data-driven decision making.',
                ask: 'Seeking collaboration with engineers and designers to build products that truly solve user problems.',
                linkedin: 'https://linkedin.com/in/bob-smith',
                profile_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
                wants_meet: false
            }
        },
        {
            email: 'carol@example.com',
            password: 'password123',
            profile: {
                display_name: 'Carol Davis',
                title: 'UX Designer',
                superpower: 'Creating beautiful, accessible, and user-friendly interfaces. I specialize in user research and design systems.',
                ask: 'Want to work with developers and PMs who prioritize user experience and accessibility in their products.',
                linkedin: 'https://linkedin.com/in/carol-davis',
                profile_image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
                wants_meet: true
            }
        },
        // Prominent profiles
        {
            email: 'satya.nadella@microsoft.com',
            password: 'password123',
            profile: {
                display_name: 'Satya Nadella',
                title: 'Chairman & CEO, Microsoft',
                superpower: 'Driving transformative innovation through a deep focus on cloud computing, AI, and collaboration—reshaping Microsoft into a platform of empowerment.',
                ask: 'Looking to partner with visionary leaders who believe in the power of technology to unlock human potential and drive inclusive progress.',
                linkedin: 'https://linkedin.com/in/satya-nadella',
                profile_image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Satya_Nadella_2020.jpg',
                wants_meet: true
            }
        },
        {
            email: 'jensen.huang@nvidia.com',
            password: 'password123',
            profile: {
                display_name: 'Jensen Huang',
                title: 'CEO & Founder, Nvidia',
                superpower: 'Forging the semiconductor revolution by steering Nvidia from gaming GPUs to AI and generative breakthroughs—making it one of the most influential tech companies globally.',
                ask: 'Seeking collaborations with innovators exploring the next frontier in AI acceleration and computational breakthroughs.',
                linkedin: 'https://linkedin.com/in/jensen-huang',
                profile_image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Jensen_Huang_2016.jpg',
                wants_meet: true
            }
        },
        {
            email: 'sam.altman@openai.com',
            password: 'password123',
            profile: {
                display_name: 'Sam Altman',
                title: 'CEO, OpenAI',
                superpower: 'Leading AI development responsibly and purposefully—bridging cutting-edge research with real-world impact.',
                ask: 'Eager to team up with mission-driven thinkers and organizations that aim to harness AI for societal good.',
                linkedin: 'https://linkedin.com/in/sam-altman',
                profile_image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Sam_Altman_2023.jpg',
                wants_meet: true
            }
        },
        {
            email: 'alex.karp@palantir.com',
            password: 'password123',
            profile: {
                display_name: 'Alex Karp',
                title: 'CEO, Palantir Technologies',
                superpower: 'Combining philosophical nuance and data-driven strategy to helm Palantir\'s explosive growth, establishing it as an S&P 500 standout.',
                ask: 'Looking to explore dialogues with thinkers in ethical data use, national security, and AI governance.',
                linkedin: 'https://linkedin.com/in/alex-karp',
                profile_image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Alex_Karp_2019.jpg',
                wants_meet: false
            }
        },
        {
            email: 'peter.wang@anaconda.com',
            password: 'password123',
            profile: {
                display_name: 'Peter Wang',
                title: 'Co-Founder & Chief AI & Innovation Officer, Anaconda',
                superpower: 'Empowering millions through open-source data science tools and leading innovation in Python-based analytics for data scientists worldwide.',
                ask: 'Interested in collaborating on projects that enable inclusive, scalable tools for data science communities.',
                linkedin: 'https://linkedin.com/in/peter-wang',
                profile_image: 'https://www.anaconda.com/hubfs/team/PeterWang.jpg',
                wants_meet: true
            }
        },
        {
            email: 'eric.weber@yelp.com',
            password: 'password123',
            profile: {
                display_name: 'Eric Weber',
                title: 'Head of Experimentation, Yelp',
                superpower: 'Architecting experimentation and blending business insight with scientific rigor—excelling in A/B testing and data-driven decision-making.',
                ask: 'Looking to connect with data science teams and product leaders interested in rigorous experimentation and growth optimization.',
                linkedin: 'https://linkedin.com/in/eric-weber',
                profile_image: 'https://media.licdn.com/dms/image/C5603AQEqFfQ8Idas3g/profile-displayphoto-shrink_800_800/0/1517691031479?e=2147483647&v=beta&t=zzNm7PjAg4lJoO-Z2FnnnqvQPYx2gQ42oZVvGnVm-MI',
                wants_meet: false
            }
        }
    ];
    const results = [];
    for (const user of testUsers){
        try {
            // Create user account
            const { data: authData, error: authError } = await supabase.auth.admin.createUser({
                email: user.email,
                password: user.password,
                email_confirm: true
            });
            if (authError) {
                console.error(`Error creating user ${user.email}:`, authError);
                results.push({
                    email: user.email,
                    success: false,
                    error: authError.message
                });
                continue;
            }
            if (!authData.user) {
                console.error(`No user data returned for ${user.email}`);
                results.push({
                    email: user.email,
                    success: false,
                    error: 'No user data returned'
                });
                continue;
            }
            // Create profile
            const { error: profileError } = await supabase.from('profiles').update(user.profile).eq('id', authData.user.id);
            if (profileError) {
                console.error(`Error creating profile for ${user.email}:`, profileError);
                results.push({
                    email: user.email,
                    success: false,
                    error: profileError.message
                });
                continue;
            }
            console.log(`Successfully created user and profile for ${user.email}`);
            results.push({
                email: user.email,
                success: true,
                userId: authData.user.id,
                profile: user.profile.display_name
            });
        } catch (error) {
            console.error(`Unexpected error for ${user.email}:`, error);
            results.push({
                email: user.email,
                success: false,
                error: 'Unexpected error'
            });
        }
    }
    return results;
}
// Only for development - remove in production
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/src/app/(protected)/admin/create-test-users/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CreateTestUsersPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$test$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/create-test-users.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function CreateTestUsersPage() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleCreateUsers = async ()=>{
        setLoading(true);
        setResult('');
        try {
            // Capture console.log output
            const originalLog = console.log;
            let logOutput = '';
            console.log = (...args)=>{
                logOutput += args.join(' ') + '\n';
                originalLog(...args);
            };
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$create$2d$test$2d$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTestUsers"])();
            // Restore console.log
            console.log = originalLog;
            setResult(logOutput);
        } catch (error) {
            setResult(`Error: ${error}`);
        } finally{
            setLoading(false);
        }
    };
    // Only show in development
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-6",
                    children: "Create Test Users"
                }, void 0, false, {
                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-yellow-800",
                            children: "Development Tool"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-sm text-yellow-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "This will create 3 test users with complete profiles:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc list-inside mt-2 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Alice Johnson (Product Manager)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Marcus Rodriguez (Full Stack Developer) - wants to meet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Sarah Chen (UX Designer)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleCreateUsers,
                    disabled: loading,
                    className: "w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: loading ? 'Creating Users...' : 'Create Test Users'
                }, void 0, false, {
                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-medium text-gray-900 mb-2",
                            children: "Result:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "bg-gray-100 p-4 rounded-md text-sm whitespace-pre-wrap font-mono",
                            children: result
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 text-sm text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "After creating users:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                lineNumber: 80,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "list-decimal list-inside mt-2 space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        "Visit ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "bg-gray-100 px-1 rounded",
                                            children: "/members"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 23
                                        }, this),
                                        " to see the test profiles"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: 'Try clicking "Remember" on different profiles'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: [
                                        "Visit ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "bg-gray-100 px-1 rounded",
                                            children: "/my-circle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 23
                                        }, this),
                                        " to see saved connections"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Test the Meet opt-in functionality"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(protected)/admin/create-test-users/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=src_d83fd305._.js.map