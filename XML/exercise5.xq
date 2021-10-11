<neighbors>
{
  for $border in //country[@name="Germany"]/border
  let $countryIdString := $border/@country/string()
  let $countryNameString := //country[@id=$countryIdString]/name/string()
  return <country>{$countryNameString}</country>
}
</neighbors>