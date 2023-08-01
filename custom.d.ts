declare module "*.svg" {
  const content:
    | React.FunctionComponent<React.SVGAttributes<SVGElement>>
    | DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  export default content;
}
declare module "*.jpg" {
  const content: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  export default content;
}
