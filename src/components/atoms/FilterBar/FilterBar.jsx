import filterOptions from "./FilterOptions";

function filterGroups({filters}){
    return (
        <section id="filters">
            {filters?.length && (
                filters.map((filter) => {
                    return (
                        <div id={filter.id} className="filter-group">
                            <h4>{filter.name}</h4>
                            <filterOptions 
                            items={filter.items}
                            group={filter.id}/>
                        </div>
                    )
                })
            )}
        </section>
    )
}