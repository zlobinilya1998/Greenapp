type Info = {
    title: string
    value: string
}
type TableItem = {
    adddress: string
    round: string
    allocation: string
    blocked: string
    unlocked: string
    timeToUnlock: string
}

type Graph = {
    labels: string[],
    datasets: [{
        label: string,
        backgroundColor: string,
        borderColor: string,
        data: number[],
    }]
}
type Diagram = {
    labels: string[],
    datasets: [
        {
            label: string,
            data: number[],
            backgroundColor: string[],
            hoverOffset: number,
        }
    ]
};
export type Dashboard = {
    graph: Graph
    diagram: Diagram
    infos: Info[]
    table: TableItem[]
}
