import { getInputProps, WidgetProps } from '@rjsf/utils';
import { Input, TextInputType } from '../../components/input/Input';

export const InputWidget = (props: WidgetProps) => {
  const { type, value, label, schema, onChange, options, required, readonly, rawErrors, disabled } = props;
  const inputProps = getInputProps(schema, type, options);

  return (
    <Input
      description={props.schema.description}
      onChange={(event) => {
        event.preventDefault();
        onChange(event.target.value);
      }}
      value={value || ''}
      required={required}
      label={label}
      type={inputProps.type as TextInputType}
      error={rawErrors}
      readOnly={readonly}
      disabled={disabled}
    />
  );
};
