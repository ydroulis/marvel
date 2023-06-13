import React from 'react';
import * as S from './styles';
import { IComic } from '@/types/Comic';

interface ComicsSectionProps {
    comics: IComic[] | undefined;
}

const ComicsSection: React.FC<ComicsSectionProps> = ({ comics }) => {
    return (
        // <div>oi</div>
        <S.ComicsSectionContainer>
            <h2>Últimos lançamentos</h2>
            <S.ComicList>
                {comics && comics.length > 0 && comics.map((comic, i) => {
                    return (
                        <li>
                            <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} alt={`Capa do quadrinho ${comic.title}`} />
                            <p>{comic.title}</p>
                        </li>
                    )
                })}
            </S.ComicList>

        </S.ComicsSectionContainer>
    );
}

export default ComicsSection;