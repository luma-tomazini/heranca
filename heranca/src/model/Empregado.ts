export abstract class Empregado{


    private nome: string;
    private cpf: string;

    public constructor(_nome:string, _cpf:string){

        this.nome = _nome;
        this.cpf = _cpf;
    }

    public abstract vencimento ():number;

    public setNome(_nome:string):void{
        this.nome = _nome;
    }
    public getNome ():string{
        return this.nome;
    }
    public setCPF(_cpf:string):void{
        this.cpf = _cpf;
    }
    public getCPF ():string{
        return this.cpf;
    }
}