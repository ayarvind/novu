import { WidgetProps } from '@rjsf/utils';
import { Select } from '../../components/select/Select';

export const SelectWidget = (props: WidgetProps) => {
  const { options, label, required, disabled, readonly, value, schema, onChange, rawErrors } = props;
  const data = options.enumOptions.map((option) => {
    return {
      label: option.label,
      value: String(option.value),
    };
  });

  return (
    <Select
      description={schema.description}
      onChange={onChange}
      value={value}
      required={required}
      label={label}
      data={data}
      disabled={disabled}
      readOnly={readonly}
      error={rawErrors}
    />
  );
};
