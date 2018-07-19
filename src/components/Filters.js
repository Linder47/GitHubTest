import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
// const Option = Select.Option;

const Filters = (props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form>
      <FormItem label="Radio.Group">
        {getFieldDecorator('radio-group')(<RadioGroup><Radio value="all">all</Radio><Radio value="forks">forks</Radio><Radio value="sources">sources</Radio></RadioGroup>)}
      </FormItem>

      <FormItem label="Radio.Button">
        {getFieldDecorator('radio-button')(<RadioGroup><RadioButton value="all">all</RadioButton><RadioButton value="forks">forks</RadioButton><RadioButton value="sources">sources</RadioButton></RadioGroup>)}
      </FormItem>
    </Form>
  );
};

Filters.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
};

export default Filters;
