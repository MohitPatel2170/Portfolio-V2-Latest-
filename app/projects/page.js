import ProjectsWithFilter from '@/components/UI/ProjectsWithFilter';
import SectionHeader from '@/components/UI/SectionHeader';
import data from '@/data/data.json';

export const metadata = {
    title: 'Projects | Mohit Patel - Full-Stack Web Developer',
    description:
        'Explore all projects by Mohit Patel, a Full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
    openGraph: {
        title: 'Projects | Mohit Patel - Full-Stack Web Developer',
        description:
            'Explore all projects by Mohit Patel, a Full-stack web developer. Categories include Full Stack, React, Next.js, Blockchain, and more.',
        url: '/projects',
        images: [],
    },
    alternates: {
        canonical: '/projects',
    },
};

export default function ProjectsPage() {
    const { projects } = data.data;

    const categories = ['All', ...new Set(projects.map((project) => project.category))];

    return (
        <section className="bg-black text-white py-6 mt-22">
            <main className="mx-auto px-6 md:px-8 lg:px-16">

                <SectionHeader title={'projects'} description={'View all my latest projects here'} linkText={'back to home'} link={'/'} />

                {/* Projects Section with Categories */}
                <div className="mt-16">
                    <ProjectsWithFilter projects={projects} categories={categories} />
                </div>

            </main>
        </section>
    );
}