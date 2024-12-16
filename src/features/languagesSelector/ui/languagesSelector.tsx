import { useState, useRef, type FC } from 'react';
import { useClickOutside } from '../../../shared/lib/hooks/useClickOutside';
import { DropDownList } from '../../../shared/ui/dropDownList';
import { Button } from '../../../shared/ui/button';
import { LANGUAGES } from '../../../shared/constants/languages';

import './languagesSelector.scss';

interface LanguagesSelectorProps {
  currentLanguage: string;
  onSelect: (language: string) => void;
}

const languages = Object.entries(LANGUAGES);

export const LanguagesSelector: FC<LanguagesSelectorProps> = ({
  currentLanguage,
  onSelect,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);

  const handleOpenDropDownList = () => {
    setIsOpenDropdownList((prev) => !prev);
  };

  const handleSelectLanguage = (language: string) => {
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
      {currentLanguage === lowerCase ? (
        <img src="/icons/check-mark.svg" alt="check-mark" />
      ) : (
        <div className="placeholder" />
      )}
      {pascalCase}
    </div>
  ));

  return (
    <div className="languages-selector" ref={containerRef}>
      <Button
        onClick={handleOpenDropDownList}
        text={LANGUAGES[currentLanguage]}
        withChevron={true}
        isClicked={isOpenDropdownList}
      />
      <DropDownList
        content={dropdownContentItems}
        isOpen={isOpenDropdownList}
        className="dropdown__absolute"
      />
    </div>
  );
};
