import { useState, type FC } from 'react';
import { DropDownList } from '../../../shared/ui/dropDownList';
import { LANGUAGES } from '../../../shared/constants/languages';

import './index.scss';

interface LanguagesSelectorProps {
  currentLanguage: string;
  onSelect: (language: string) => void;
}

export const LanguagesSelector: FC<LanguagesSelectorProps> = ({
  currentLanguage,
  onSelect,
}) => {
  const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);

  const handleOpenDropDownList = () => {
    setIsOpenDropdownList(!isOpenDropdownList);
  };

  const handleSelectLanguage = (language: string) => {
    onSelect(language);
    handleOpenDropDownList();
  };

  const dropdownContentItems = LANGUAGES.map((language) => (
    <div
      className="dropdown__item"
      key={language}
      onClick={() => handleSelectLanguage(language)}
      role="button"
      tabIndex={0}
    >
      {currentLanguage === language ? (
        <img src="/icons/check-mark.svg" alt="check-mark" />
      ) : (
        <div className="placeholder" />
      )}
      {language}
    </div>
  ));

  return (
    <div className="languages-selector">
      <DropDownList
        content={dropdownContentItems}
        isOpen={isOpenDropdownList}
        className="dropdown__absolute"
      />
    </div>
  );
};
