export class CanvasNode  {

    Id: string;

    Name: string;

    // position
    X: number;
    Y: number;

    // whether or not this node is part of the critical path
    Critical: boolean;

    // Array of ids of the subsequent nodes
    Successors: string[];

    // Array of ids of nodes before this node
    Predeccessors: string[];

    Duration: number;

}