import React from 'react'
import {useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'

const navigation = [
    {name: 'About', href: '#profile'},
    {name: 'Works', href: '#works'},
    {name: 'Specialities', href: '#specialities'},
    {name: 'Contact', href: '#contact'},
]

const posts = [
    {
        id: 1,
        title: 'Donutopia',
        img: '/project/donutopia.png',
        href: '#',
        description:
            'Developed a donut sales platform offering various unique flavors, enabling customers to easily browse, order, and enjoy fresh, high-quality donuts',
        date: 'Jun, 2023',
        category: {title: 'PHP', href: '#'},
    },
    {
        id: 2,
        title: 'Mobile SuperApp',
        img: '/project/kkp.jpg',
        href: '#',
        description: 'Contributed to the development of a government superapp mobile platform that integrates information systems to enhance digital service accessibility and efficiency.',
        date: 'Jan, 2024',
        category: {title: 'React Native', href: '#'},
    },
    {
        id: 3,
        title: 'Assets Management System',
        img: '/project/ams.png',
        href: '#',
        description:
            'Developed an Asset Management System to streamline the tracking, management, and maintenance of physical and digital assets within the organization.',
        date: 'Jul, 2020',
        category: {title: 'JS + Node-Red', href: '#'},
        author: {
            name: 'Tom Cook',
            role: 'Director of Product',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }, {
        id: 4,
        title: 'SPP StudioHub',
        img: '/project/studiohub.png',
        href: '#',
        description:
            'Developed a web-based system integrating studio booking, consultation services, and asset management features to streamline operational processes within the organization.',
        date: 'Jun, 2025',
        category: {title: 'Laravel', href: '#'},
    },
]

const language_and_framework = [
    {src: '/language_and_framework/php.png'},
    {src: '/language_and_framework/laravel.png'},
    {src: '/language_and_framework/java.png'},
    {src: '/language_and_framework/jquery.png'},
    {src: '/language_and_framework/js.png'},
    {src: '/language_and_framework/nodejs.png'},
    {src: '/language_and_framework/react.png'},
    {src: '/language_and_framework/react-native.png'},
    // {src: '/language_and_framework/nextjs.png'},
    // {src: '/language_and_framework/expressjs.png'},
    {src: '/language_and_framework/python.png'},
    {src: '/language_and_framework/bootstrap.png'},
    {src: '/language_and_framework/tailwind.png'},
]

const database_and_storage = [
    {src: '/database_and_storage/mysql.png'},
    {src: '/database_and_storage/mongodb.png'},
    {src: '/database_and_storage/neo4j.png'},
]

const tools_and_platform = [
    {src: '/tools_and_platform/vscode.png'},
    {src: '/tools_and_platform/webstorm.png'},
    {src: '/tools_and_platform/android-studio.png'},
    {src: '/tools_and_platform/github.png'},
    {src: '/tools_and_platform/postman.png'},
    // {src: '/tools_and_platform/prisma.png'},
    {src: '/tools_and_platform/expogo.png'},
    {src: '/tools_and_platform/figma.png'},
    {src: '/tools_and_platform/nodered.png'},
]

const App = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={`${import.meta.env.BASE_URL}Logo.png`}
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src={`${import.meta.env.BASE_URL}Logo.png`}
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6"></div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#E62525] to-[#8B0000] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div
                            className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Want to collaborate or have a project idea? {' '}
                            <a href="#" className="font-semibold text-red-600">
                                <span aria-hidden="true" className="absolute inset-0"/>
                                Let's make it happen!
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                            From concept to code — bringing your ideas to life
                        </h1>
                        <p className="mt-8 text-l font-medium text-pretty text-gray-500 sm:text-xl/8">
                            Welcome, Explore my portfolio and discover how I can help bring your digital projects to
                            life.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#works"
                                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                What I have done?
                            </a>
                            <a href="#specialities" className="text-sm/6 font-semibold text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#E62525] to-[#8B0000] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </div>
            </div>

            {/*PROFILE*/}
            <div id="profile" className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-red-600">Web & Mobile Developer</p>
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Muhammad
                                    Hilmy Aiman</h1>
                                <p className="mt-6 text-xl/8 text-gray-700">Hi! I’m Hilmy, a Web & Mobile Developer with
                                    two years of hands-on experience turning ideas into interactive digital products.
                                    I love building things that not only work smoothly but also feel great to use from
                                    responsive websites to intuitive mobile apps.</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            src={`${import.meta.env.BASE_URL}Foto2.jpg`}
                            alt=""
                            className="w-full max-w-3xl rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228" />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="mt-1 size-5 flex-none text-red-600">
                                            <path fillRule="evenodd"
                                                  d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Junior Programming Certification.</strong> A graduate of SMKN 2 Bandung majoring in software engineering with a competent rating.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="mt-1 size-5 flex-none text-red-600">
                                            <path
                                                d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"/>
                                            <path
                                                d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"/>
                                            <path
                                                d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"/>
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Bachelor of Information Systems.</strong> Graduated from the Bandung National Institute of Technology with cumlaude honors.</span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                             className="mt-1 size-5 flex-none text-red-600">
                                            <path fillRule="evenodd"
                                                  d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span><strong className="font-semibold text-gray-900">Presenter at the International Congress.</strong> Presenting research results on a recommendation system for potential research collaborators using ontology, knowledge graph and R-GCN.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*WORKS*/}
            <div id="works" className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-red-600 sm:text-5xl">Previous
                            Works</h2>
                        <p className="mt-2 text-lg/8 text-gray-600">A showcase of my completed projects and
                            achievements.</p>
                    </div>
                    <div
                        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <p
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-red-600 hover:text-white"
                                    >
                                        {post.category.title}
                                    </p>
                                </div>
                                <img src={`${import.meta.env.BASE_URL}${post.img}`} alt="" className="py-5 h-70 w-100"/>
                                <div className="group relative grow">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0"/>
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/*SPECIALITIES*/}
            <div id="specialities" className="relative isolate px-6 lg:px-8">
                <div>
                    <div className="pt-14">
                        <div className="mx-auto max-w-6xl px-6 lg:px-2">
                            <h1 className="text-center text-2xl font-semibold text-red-600">Programming Languages &
                                Frameworks</h1>
                            <div
                                className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-15 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                {language_and_framework.map((item) => (
                                    <img width="158" height="48"
                                         src={`${import.meta.env.BASE_URL}${item.src}`}
                                         alt="Transistor"
                                         className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="py-24 sm:pb-32">
                        <div className="mx-auto max-w-6xl px-6 lg:px-2">
                            <h1 className="text-center text-2xl font-semibold text-red-600">Databases & Storages</h1>
                            <div
                                className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-15 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                {database_and_storage.map((item) => (
                                    <img width="158" height="48"
                                         src={`${import.meta.env.BASE_URL}${item.src}`}
                                         alt="Transistor"
                                         className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"/>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="sm:pb-44">
                        <div className="mx-auto max-w-6xl px-6 lg:px-2">
                            <h1 className="text-center text-2xl font-semibold text-red-600">Tools & Platforms</h1>
                            <div
                                className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-15 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                {tools_and_platform.map((item) => (
                                    <img width="158" height="48"
                                         src={`${import.meta.env.BASE_URL}${item.src}`}
                                         alt="Transistor"
                                         className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#E62525] to-[#8B0000] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                    />
                </div>
            </div>

            {/*CONTACT*/}
            <footer className="bg-white lg:grid lg:grid-cols-5">
                <div id="contact" className="relative block h-32 px-4 lg:col-span-2 lg:h-full flex justify-center items-end mt-4 mb-0 lg:justify-start lg:items-center lg:mt-0">
                    <img
                        src={`${import.meta.env.BASE_URL}Logo.png`}
                        alt="Logo"
                        className="h-20 w-auto object-contain sm:h-24 md:h-28 lg:h-full lg:w-auto lg:object-cover"
                    />
                </div>

                <div className="px-4 py-8 sm:px-6 lg:col-span-3 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-2 lg:mt-0">
                        <div>
                            <p>
                                <span className="text-xs tracking-wide text-gray-500 uppercase"> Contant me </span>

                                <a href="#"
                                   className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
                                    hilmyaiman625@gmail.com
                                </a>
                            </p>

                            <ul className="mt-8 space-y-1 text-sm text-gray-700">
                                <li>Monday to Friday: 9am - 5pm</li>
                                <li>Weekend: 9am - 3pm</li>
                            </ul>

                            <ul className="mt-8 flex gap-6">
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/hilmy-aiman-21899028a/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">LinkedIn</span>

                                        <svg className="size-6" fill="currentColor" viewBox="0 30 58 24"
                                             aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z"
                                                clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.instagram.com/hlllmya/"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">Instagram</span>

                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://github.com/Hilmy-19"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75"
                                    >
                                        <span className="sr-only">GitHub</span>

                                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <p className="font-medium text-gray-900">Contribution</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Developed responsive applications </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Improved system performance and maintainability </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Collaborated in UI/UX implementation and integration </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Delivered clean, reusable, and scalable code </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-gray-900">Approach</p>

                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Focus on user experience and performance </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Write clean and consistent code </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Prioritize collaboration and communication </a>
                                    </li>

                                    <li>
                                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Keep learning new tools and frameworks </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-12">
                        <div className="sm:flex sm:items-center sm:justify-end">
                            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                                &copy; 2025. Muhammad Hilmy Aiman. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    )
}
export default App
