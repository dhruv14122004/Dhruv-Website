import { motion } from 'framer-motion';

const GithubSection = () => {
    const username = "dhruv14122004";
    const themeParams = "&title_color=ff4d00&text_color=ffffff&icon_color=ff4d00&bg_color=1a1a1a&hide_border=false&border_color=333333&border_radius=0";

    const pinnedRepos = [
        { owner: "dhruv14122004", repo: "Dhruv-Website" },
        { owner: "dhruv14122004", repo: "canary-deployment-without-using-service-mesh" },
        { owner: "dhruv14122004", repo: "Ticket_Booking_app" },
        { owner: "nikkhilpareek", repo: "virtual_trading_app" },
        { owner: "devrishivermaa", repo: "capsule-commandos" }
    ];

    return (
        <section id="opensource" className="py-20 px-4">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-heading uppercase text-retro-text section-title">
                        Open Source
                    </h2>
                </motion.div>

                <div className="max-w-7xl mx-auto flex flex-col gap-12">
                    {/* Activity Graph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full overflow-hidden border-2 border-retro-border bg-retro-surface shadow-retro p-4"
                    >
                        <h3 className="text-xl font-bold text-retro-accent mb-4 font-heading uppercase">Contribution Activity</h3>
                        <div className="w-full overflow-x-auto">
                            <img
                                src={`https://ghchart.rshah.org/ff4d00/${username}`}
                                alt="Dhruv's Github Chart"
                                className="min-w-[800px] w-full"
                            />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pinnedRepos.map((item, index) => (
                            <motion.a
                                key={item.repo}
                                href={`https://github.com/${item.owner}/${item.repo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="block transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <img
                                    src={`https://github-readme-stats.vercel.app/api/pin/?username=${item.owner}&repo=${item.repo}${themeParams}`}
                                    alt={item.repo}
                                    className="w-full h-auto border-2 border-retro-border shadow-retro hover:shadow-none"
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubSection;
