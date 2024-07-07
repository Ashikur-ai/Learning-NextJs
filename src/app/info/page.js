'use client'
export default function Info() {
    console.log('this is server side component')
    return (
        <>
            <h1>This is info component</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, omnis.</p>
            <button className="px-3 py-2 rounded bg-blue-600">Click Here</button>
        </>
    );
}