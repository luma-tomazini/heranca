import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado(`Miroslav Klose`,`19324092142`,1500);
console.log(a1)
a1.setNome(`Shaolin Matador de Porco`);
a1.setCPF(`40028922`);
a1.setSalario(2500);
console.log(a1.getNome());
console.log(a1.getCPF());
console.log(a1.getSalario());
console.log(a1.vencimento());

const a2 = new Horista(`Jucelino`,`123213123123`,20,60);
console.log(a2)
a2.setNome(`Marquin do Pneu`);
a2.setCPF(`1021943133`);
a2.setValorHora(45);
a2.setHorasTrabalhadas(100);
console.log(a2.getNome());
console.log(a2.getCPF());
console.log(a2.getValorHora());
console.log(a2.getHorasTrablhadas());
console.log(a2.vencimento());


const a3 = new Comissionado(`Billi Joe`,`9999999999`, 12,120);
console.log(a3)
a3.setNome(`Robertin`);
a3.setCPF(`1000000000`);
a3.setTotalVendas(10);
a3.setTaxaComissao(1);
console.log(a3.getNome());
console.log(a3.getCPF());
console.log(a3.getTotalVendas());
console.log(a3.getTaxaComissao());
console.log(a3.vencimento());