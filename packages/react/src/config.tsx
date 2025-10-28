import { AccordionConfig } from "@jamsrui/accordion";
import { AlertConfig } from "@jamsrui/alert";
import { AlertDialogConfig } from "@jamsrui/alert-dialog";
import { AlertPopoverConfig } from "@jamsrui/alert-popover";
import { AutocompleteConfig } from "@jamsrui/autocomplete";
import { AvatarConfig } from "@jamsrui/avatar";
import { BreadcrumbConfig } from "@jamsrui/breadcrumb";
import { ButtonConfig } from "@jamsrui/button";
import { CardConfig } from "@jamsrui/card";
import { ChartsConfig } from "@jamsrui/charts";
import { CheckboxConfig } from "@jamsrui/checkbox";
import { ChipConfig } from "@jamsrui/chip";
import { CircularProgressConfig } from "@jamsrui/circular-progress";
import { ClipboardConfig } from "@jamsrui/clipboard";
import { CollapsibleConfig } from "@jamsrui/collapsible";
import { DataGridConfig } from "@jamsrui/data-grid";
import { DatePickerConfig } from "@jamsrui/date-picker";
import { DialogConfig } from "@jamsrui/dialog";
import { DividerConfig } from "@jamsrui/divider";
import { DrawerConfig } from "@jamsrui/drawer";
import { EditorConfig } from "@jamsrui/editor";
import { HeaderConfig } from "@jamsrui/header";
import { IconButtonConfig } from "@jamsrui/icon-button";
import { InputConfig } from "@jamsrui/input";
import { KbdConfig } from "@jamsrui/kbd";
import { LinearProgressConfig } from "@jamsrui/linear-progress";
import { LinkConfig } from "@jamsrui/link";
import { MenuConfig } from "@jamsrui/menu";
import { NumberInputConfig } from "@jamsrui/number-input";
import { OtpInputConfig } from "@jamsrui/otp-input";
import { PaginationConfig } from "@jamsrui/pagination";
import { PopoverConfig } from "@jamsrui/popover";
import { RadioConfig } from "@jamsrui/radio";
import { RatingConfig } from "@jamsrui/rating";
import { RippleConfig } from "@jamsrui/ripple";
import { ScrollAreaConfig } from "@jamsrui/scroll-area";
import { SelectConfig } from "@jamsrui/select";
import { SidebarConfig } from "@jamsrui/sidebar";
import { SkeletonConfig } from "@jamsrui/skeleton";
import { SliderConfig } from "@jamsrui/slider";
import { SwitchConfig } from "@jamsrui/switch";
import { TableConfig } from "@jamsrui/table";
import { TabsConfig } from "@jamsrui/tabs";
import { TagsInputConfig } from "@jamsrui/tags-input";
import { TextConfig } from "@jamsrui/text";
import { TextareaConfig } from "@jamsrui/textarea";
import { ToastConfig } from "@jamsrui/toast";
import { ToggleConfig } from "@jamsrui/toggle";
import { TooltipConfig } from "@jamsrui/tooltip";

type Props = {
  children: React.ReactNode;
  accordion?: AccordionConfig.Props;
  alert?: AlertConfig.Props;
  alertDialog?: AlertDialogConfig.Props;
  alertPopover?: AlertPopoverConfig.Props;
  autocomplete?: AutocompleteConfig.Props;
  avatar?: AvatarConfig.Props;
  breadcrumb?: BreadcrumbConfig.Props;
  button?: ButtonConfig.Props;
  card?: CardConfig.Props;
  charts?: ChartsConfig.Props;
  checkbox?: CheckboxConfig.Props;
  chip?: ChipConfig.Props;
  circularProgress?: CircularProgressConfig.Props;
  clipboard?: ClipboardConfig.Props;
  collapsible?: CollapsibleConfig.Props;
  dataGrid?: DataGridConfig.Props;
  datePicker?: DatePickerConfig.Props;
  dialog?: DialogConfig.Props;
  divider?: DividerConfig.Props;
  drawer?: DrawerConfig.Props;
  editor?: EditorConfig.Props;
  header?: HeaderConfig.Props;
  iconButton?: IconButtonConfig.Props;
  input?: InputConfig.Props;
  kbd?: KbdConfig.Props;
  linearProgress?: LinearProgressConfig.Props;
  link?: LinkConfig.Props;
  menu?: MenuConfig.Props;
  numberInput?: NumberInputConfig.Props;
  otpInput?: OtpInputConfig.Props;
  pagination?: PaginationConfig.Props;
  popover?: PopoverConfig.Props;
  radio?: RadioConfig.Props;
  rating?: RatingConfig.Props;
  ripple?: RippleConfig.Props;
  scrollArea?: ScrollAreaConfig.Props;
  select?: SelectConfig.Props;
  sidebar?: SidebarConfig.Props;
  skeleton?: SkeletonConfig.Props;
  slider?: SliderConfig.Props;
  switch?: SwitchConfig.Props;
  table?: TableConfig.Props;
  tabs?: TabsConfig.Props;
  tagsInput?: TagsInputConfig.Props;
  textarea?: TextareaConfig.Props;
  text?: TextConfig.Props;
  toast?: ToastConfig.Props;
  toggle?: ToggleConfig.Props;
  tooltip?: TooltipConfig.Props;
};

export const JamsrUIConfig = (props: Props) => {
  const { children } = props;
  return (
    <AccordionConfig {...props.accordion}>
      <AlertConfig {...props.alert}>
        <AlertDialogConfig {...props.alertDialog}>
          <AlertPopoverConfig {...props.alertPopover}>
            <AutocompleteConfig {...props.autocomplete}>
              <AvatarConfig {...props.avatar}>
                <BreadcrumbConfig {...props.breadcrumb}>
                  <ButtonConfig {...props.button}>
                    <CardConfig {...props.card}>
                      <ChartsConfig {...props.charts}>
                        <CheckboxConfig {...props.checkbox}>
                          <ChipConfig {...props.chip}>
                            <CircularProgressConfig {...props.circularProgress}>
                              <ClipboardConfig {...props.clipboard}>
                                <CollapsibleConfig {...props.collapsible}>
                                  <DataGridConfig {...props.dataGrid}>
                                    <DatePickerConfig {...props.datePicker}>
                                      <DialogConfig {...props.dialog}>
                                        <DividerConfig {...props.divider}>
                                          <DrawerConfig {...props.drawer}>
                                            <EditorConfig {...props.editor}>
                                              <HeaderConfig {...props.header}>
                                                <IconButtonConfig
                                                  {...props.iconButton}
                                                >
                                                  <InputConfig {...props.input}>
                                                    <KbdConfig {...props.kbd}>
                                                      <LinearProgressConfig
                                                        {...props.linearProgress}
                                                      >
                                                        <LinkConfig
                                                          {...props.link}
                                                        >
                                                          <MenuConfig
                                                            {...props.menu}
                                                          >
                                                            <NumberInputConfig
                                                              {...props.numberInput}
                                                            >
                                                              <OtpInputConfig
                                                                {...props.otpInput}
                                                              >
                                                                <PaginationConfig
                                                                  {...props.pagination}
                                                                >
                                                                  <PopoverConfig
                                                                    {...props.popover}
                                                                  >
                                                                    <RadioConfig
                                                                      {...props.radio}
                                                                    >
                                                                      <RatingConfig
                                                                        {...props.rating}
                                                                      >
                                                                        <RippleConfig
                                                                          {...props.ripple}
                                                                        >
                                                                          <ScrollAreaConfig
                                                                            {...props.scrollArea}
                                                                          >
                                                                            <SelectConfig
                                                                              {...props.select}
                                                                            >
                                                                              <SidebarConfig
                                                                                {...props.sidebar}
                                                                              >
                                                                                <SkeletonConfig
                                                                                  {...props.skeleton}
                                                                                >
                                                                                  <SliderConfig
                                                                                    {...props.slider}
                                                                                  >
                                                                                    <SwitchConfig
                                                                                      {...props.switch}
                                                                                    >
                                                                                      <TableConfig
                                                                                        {...props.table}
                                                                                      >
                                                                                        <TabsConfig
                                                                                          {...props.tabs}
                                                                                        >
                                                                                          <TagsInputConfig
                                                                                            {...props.tagsInput}
                                                                                          >
                                                                                            <TextareaConfig
                                                                                              {...props.textarea}
                                                                                            >
                                                                                              <TextConfig
                                                                                                {...props.text}
                                                                                              >
                                                                                                <ToastConfig
                                                                                                  {...props.toast}
                                                                                                >
                                                                                                  <ToggleConfig
                                                                                                    {...props.toggle}
                                                                                                  >
                                                                                                    <TooltipConfig
                                                                                                      {...props.tooltip}
                                                                                                    >
                                                                                                      {
                                                                                                        children
                                                                                                      }
                                                                                                    </TooltipConfig>
                                                                                                  </ToggleConfig>
                                                                                                </ToastConfig>
                                                                                              </TextConfig>
                                                                                            </TextareaConfig>
                                                                                          </TagsInputConfig>
                                                                                        </TabsConfig>
                                                                                      </TableConfig>
                                                                                    </SwitchConfig>
                                                                                  </SliderConfig>
                                                                                </SkeletonConfig>
                                                                              </SidebarConfig>
                                                                            </SelectConfig>
                                                                          </ScrollAreaConfig>
                                                                        </RippleConfig>
                                                                      </RatingConfig>
                                                                    </RadioConfig>
                                                                  </PopoverConfig>
                                                                </PaginationConfig>
                                                              </OtpInputConfig>
                                                            </NumberInputConfig>
                                                          </MenuConfig>
                                                        </LinkConfig>
                                                      </LinearProgressConfig>
                                                    </KbdConfig>
                                                  </InputConfig>
                                                </IconButtonConfig>
                                              </HeaderConfig>
                                            </EditorConfig>
                                          </DrawerConfig>
                                        </DividerConfig>
                                      </DialogConfig>
                                    </DatePickerConfig>
                                  </DataGridConfig>
                                </CollapsibleConfig>
                              </ClipboardConfig>
                            </CircularProgressConfig>
                          </ChipConfig>
                        </CheckboxConfig>
                      </ChartsConfig>
                    </CardConfig>
                  </ButtonConfig>
                </BreadcrumbConfig>
              </AvatarConfig>
            </AutocompleteConfig>
          </AlertPopoverConfig>
        </AlertDialogConfig>
      </AlertConfig>
    </AccordionConfig>
  );
};
