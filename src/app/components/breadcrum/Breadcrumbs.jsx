'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs= () => {
    const pathName = usePathname()
    const paths = pathName.split('/').filter(path => path !== "").map(path => decodeURIComponent(path));
    const buildPath = (index) => {
        return '/' + paths.slice(0, index + 1).join('/');
    }
    return (
        <nav className='container-breadcrumbs'>
            <Link className={paths.length === 1 ? "breadcrumb-active" : "breadcrumb"} href="/">
                <p>inicio</p>
            </Link>
            {paths.map((path, index) =>(
                <Link className={index === paths.length - 1 ? 'breadcrumb-active' : 'breadcrumb'}key={index} href={`${buildPath(index)}`}>
                    <p>{">"} {path}</p>
                </Link>
            ))}
        </nav>
    )
}

export default Breadcrumbs