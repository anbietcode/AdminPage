import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { EnglishExpressData, EnglishExpressGrid } from '../data/dummy';
import { Header } from '../components';
import { Link } from 'react-router-dom';


const EnglishExpress = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="English Express & English Pronunciation Management" />
      <Link to="/addenglishexpress" className='p-1'>
           <span className='inline'><strong>&#10010; Add English Express & English Pronunciation</strong></span>
        </Link>
      <GridComponent
        dataSource={EnglishExpressData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {EnglishExpressGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default EnglishExpress;
