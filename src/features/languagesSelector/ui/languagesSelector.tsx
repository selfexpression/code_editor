import { useState, useRef, type FC } from 'react';
import { useClickOutside } from '../../../shared/lib/hooks/useClickOutside';
import CheckMarkIcon from '../../../shared/assets/icons/check-mark.svg';
import { DropDownList } from '../../../shared/ui/dropDownList';
import { Button } from '../../../shared/ui/button';
import { LANGUAGES } from '../../../shared/constants/languages';
import type { TLanguages } from '../../../shared/types/languages';
import ChevronDownIcon from '../../../shared/assets/icons/chevron-down.svg';

import './languagesSelector.scss';

interface ILanguagesSelector {
  language: TLanguages;
  onSelect: (language: TLanguages) => void;
}

const languages = Object.entries(LANGUAGES) as [TLanguages, string][];

export const LanguagesSelector: FC<ILanguagesSelector> = ({ language, onSelect }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);

  const handleOpenDropDownList = () => {
    setIsOpenDropdownList((prev) => !prev);
  };

  const handleSelectLanguage = (language: TLanguages) => {
    onSelect(language);
    setIsOpenDropdownList(false);
  };

  /*
    Обработка клика по области экрана
  */

  useClickOutside(containerRef, () => setIsOpenDropdownList(false));

  /*
    Ключ в нижнем регистре для компонента CodeEditor
    Значение в pascal case для отображения в интерфейсе
  */

  const dropdownContentItems = languages.map(([lowerCase, pascalCase]) => (
    <div
      className="dropdown__item"
      key={pascalCase}
      onClick={() => handleSelectLanguage(lowerCase)}
      role="button"
      tabIndex={0}
    >
      {language === lowerCase ? (
        <img src={CheckMarkIcon} alt="check-mark" />
      ) : (
        <div className="dropdown__placeholder" />
      )}
      {pascalCase}
    </div>
  ));

  const chevronDownIcon = (
    <img src={ChevronDownIcon} alt="chevron" className="chevron-icon" />
  );

  return (
    <div className="languages-selector" ref={containerRef}>
      <Button
        onClick={handleOpenDropDownList}
        text={LANGUAGES[language]}
        icon={chevronDownIcon}
        isClicked={isOpenDropdownList}
      />
      <DropDownList content={dropdownContentItems} isOpen={isOpenDropdownList} />
    </div>
  );
};
