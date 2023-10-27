import './App.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { Body } from './body/Body';
import { useAppDispatch } from '../store/store.hooks';
import { useEffect } from 'react';
import { fetchBlogContent } from '../store/blog-content/blog-content.thunk';
import { fetchLocalizationTypeList } from '../store/localization-type-list/localization-type-list.thunk';
import { fetchLocalizationContent } from '../store/localization-content/localization-content.thunk';
import { useSelector } from 'react-redux';
import { localizationTypesSelectors } from '../store/localization-type-list/localization-type-list.selector';
import { localizationContentSelectors } from '../store/localization-content/localization-content.selector';

function App() {    
  const dispatch = useAppDispatch();
  const currentInitialLanguage = useSelector(localizationTypesSelectors.selectCurrentLanguage);
  useEffect(() => {dispatch(fetchBlogContent())}, []);
  useEffect(() => {dispatch(fetchLocalizationTypeList())}, []);
  useEffect(() => {dispatch(fetchLocalizationContent(currentInitialLanguage))}, [currentInitialLanguage]);
  const localization = useSelector(localizationContentSelectors.getLocalizationContent);

  return (
    <div className="App">
      <Header {...localization}/>
      <Body {...localization}/>
      <Footer {...localization}/>
    </div>
  );
}

export default App;
