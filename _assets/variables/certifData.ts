import {
  react,
  frontend,
  certifEnsa,
  ccna,
  dns,
  network,
  security,
  dynamicAccess,
  ipv6,
  protocols,
  routing,
} from "@/_assets/images/certif/index";
import { useTranslation } from "@/src/app/i18n/client";

export const certifData = [
  {
    id: 1,
    img: react,
    principal: true,
  },
  {
    id: 2,
    img: frontend,
    principal: true,
  },
  {
    id: 3,
    img: certifEnsa,
    principal: false,
  },
  {
    id: 4,
    img: ccna,
    principal: false,
  },
  {
    id: 5,
    img: network,
    principal: false,
  },
  {
    id: 6,
    img: security,
    principal: false,
  },
  {
    id: 7,
    img: ipv6,
    principal: false,
  },
  {
    id: 8,
    img: routing,
    principal: false,
  },
  {
    id: 9,
    img: dynamicAccess,
    principal: false,
  },
  {
    id: 10,
    img: protocols,
    principal: false,
  },
  {
    id: 11,
    img: dns,
    principal: false,
  },
];
