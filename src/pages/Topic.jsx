import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Page } from '@syncfusion/ej2-react-grids';
import { TopicsData, TopicsGrid } from '../data/dummy';
import { Header } from '../components';
import { Link } from 'react-router-dom';



const Topic = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Topic Management" />
      <Link to="/addtopic" className='p-1'>
           <span className='inline'><strong>&#10010; Add Topic</strong></span>
        </Link>
      <GridComponent
        dataSource={TopicsData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {TopicsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page]} />
      </GridComponent>
    </div>
  );
};
export default Topic;
