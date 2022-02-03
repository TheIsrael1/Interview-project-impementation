import React from 'react';
import NotesSection from './NotesSection';
import ContributorsSection from './ContributorsSection';
import { useView } from '../context/NotesViewContext';


const ContentArea = () => {

  const view = useView()

  return view ? <NotesSection /> : <ContributorsSection />
};

export default ContentArea;
