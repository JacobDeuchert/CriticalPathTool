export class CanvasNode  {

    public Id: string;

    public Name: string;

    public Duration: number;

    public earliestStart: number;
    public earliestEnd: number;

    public latestStart: number;
    public latestEnd: number;

    public totalBuffer: number;
    public freeBuffer: number;

    // position
    public X: number;
    public Y: number;

    // whether or not this node is part of the critical path
    public Critical: boolean;

    // Array of ids of the subsequent nodes
    public Successors: string[];

    // Array of ids of nodes before this node
    public Predeccessors: string[];
 


}