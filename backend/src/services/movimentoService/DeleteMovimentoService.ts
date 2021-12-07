import { getCustomRepository } from "typeorm";
import { MovimentoRepositories } from "../../repositories/MovimentoRepositories";

interface IMovimentoCodigo {
    idmovimento: string;
}

class DeleteMovimentoService {
    async execute({ idmovimento }: IMovimentoCodigo) {
        const movimentoRepository = getCustomRepository(MovimentoRepositories);

        const movimento = await movimentoRepository.findOne({
            idmovimento
        });

        if (!movimento) {
            throw new Error(`Não foi possível localizar o movimento de código ${idmovimento}!`);
        }

        await movimentoRepository.delete({ idmovimento });

        return movimento;
    }
}

export{DeleteMovimentoService}