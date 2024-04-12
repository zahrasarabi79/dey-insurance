import {
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export interface ILoginFormData {
  phone_number: number;
}

export interface IVerifyCodeData {
  code: number;
  phone_number: string;
}

export interface IRegisterInsuranceAgencyState {
  address: string;
  agency_type: string;
  agent_code: string;
  city_code: string;
  county: string;
  first_name: string;
  insurance_branch: string;
  last_name: string;
  phone: string;
  phone_number: string;
  province: string;
  Name: undefined | string;
}

export interface IPersonalInformationFormData {
  first_name: string;
  last_name: string;
}

export interface AgencyTypeRadioButtonProps {
  control: Control<IInsuranceAgencyFormData>;
}

export interface IInsuranceAgencyFormData {
  address: string;
  agency_type: string;
  agent_code: string;
  city_code: string;
  county: string;
  first_name: string;
  insurance_branch: string;
  last_name: string;
  phone: string;
  phone_number: string;
  province: string;
  Name: string;
}

export interface OTPInputProps {
  setValue: UseFormSetValue<IVerifyCodeData>;
  isError: any;
}

export interface PhoneTextFieldProps {
  register: UseFormRegister<IInsuranceAgencyFormData>;
  errors: any;
}

export interface ProvincesAutocompleteProps {
  setValue: UseFormSetValue<IInsuranceAgencyFormData>;
  control: Control<IInsuranceAgencyFormData>;
  errors: any;
}

export interface ProvincesAutocompleteProps {
  control: Control<IInsuranceAgencyFormData>;
}

export interface CountryAutocompleteProps extends ProvincesAutocompleteProps {
  watch: UseFormWatch<IInsuranceAgencyFormData>;
}

export interface InsuranceBranchAutocompleteProps
  extends ProvincesAutocompleteProps {
  watch: UseFormWatch<IInsuranceAgencyFormData>;
}
