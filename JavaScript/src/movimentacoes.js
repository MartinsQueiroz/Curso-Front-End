class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0) {
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}


class Registro{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes) {
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento) 
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x', 'gi') // Expressões regulares
        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(regex, 'Y')
            if(!lancamento.banco.match(regex)){
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
            
        })
        return tipo + valorAtualizado
    }
}


const m01 = new Movimentacao('000000', 'salario', 20000)
const m02 = new Movimentacao('Bank Z', 'comissao', 2000)
const m03 = new Movimentacao('Bank X', 'imposto', -5000)
const m04 = new Movimentacao('Bank X', 'contas', -1000)
const m05 = new Movimentacao('Bank Y', 'bonus', 250)
const m06 = new Movimentacao('Bank Y', 'imposto', -500)

const registro01 = new Registro(22, 10, 2021)
registro01.novaMovimentacao(m01, m02, m03, m04, m05, m06)
console.log('Saldo dos registros: ' + registro01.resumo())

const movimentacoesGerais = [m01, m02, m03, m04, m05, m06]

movimentacoesGerais.map( elemento => 
    console.log(elemento.banco.length)
)