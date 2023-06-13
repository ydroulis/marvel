import React, { Dispatch, SetStateAction } from 'react';
import Tag from './Tag';
import * as S from './styles';

interface ICharacter {
    name: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

interface TagsProps {
    filteredCharacter: ICharacter[] | undefined;
    setFilteredCharacter: Dispatch<SetStateAction<ICharacter[] | undefined>>;
}

const Tags: React.FC<TagsProps> = ({ filteredCharacter, setFilteredCharacter }) => {

    const onCloseTag = () => {
        setFilteredCharacter([]);
    }

    return (
        <S.TagsContainer>
            {filteredCharacter && filteredCharacter.map(character => {
                return (
                    <Tag closeAction={() => onCloseTag()}>
                        {character.name}
                    </Tag>)
            })}
        </S.TagsContainer>
    );
}

export default Tags;