export interface Message {
  text: string;
  type: "success" | "info" | "warning" | "danger";
  duration: number;
}
