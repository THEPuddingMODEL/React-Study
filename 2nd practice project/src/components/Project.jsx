export default function Project({data,onDelete}){

    console.log(data)

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">

            <div className="flex item-center justify-between">

                <h1 className="text-3xl font-bold text-stone-600 mb-2">
                    {data.title}
                </h1>

                <button className="text-stone-600 hover:text-stone-950" onClick={()=>onDelete(data.id)}>Delete</button>

            </div>

            <p className="mb-4 text-stone-400">{data.dueDate}</p>
            <p className="text-stone-600">{data.description}</p>

        </header>
    </div>
}