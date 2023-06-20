export interface House {
  description?: string;
  status?: string;
  address?: string;
  city?: string;
  district?: string;
  subdistrict?: string;
  id?: number;
  owner?: number;
}

export interface HouseProps {
    type: string,
    data?: House |null,
    closeModal?: () => void,
}