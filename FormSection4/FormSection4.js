<aura:component implements="flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes" access="global" >
			<!-- listen to the Event -->
    <aura:handler event="c:nextPrevEventProcessBar" action="{!c.respondToEvent}"/>
    
     <div aura:id="mySection4" class="slds-hide">
    <fieldset class="slds-form--compound">
  <legend class="slds-form-element__label slds-text-title--caps">Location</legend>
  <div class="slds-form-element__group">
    <div class="slds-form-element__row">
      <div class="slds-form-element slds-size--1-of-2">
        <label class="slds-form-element__label" for="input-01">Latitude</label>
        <input type="text" id="input-01" class="slds-input" />
      </div>
      <div class="slds-form-element slds-size--1-of-2">
        <label class="slds-form-element__label" for="input-02">Longitude</label>
        <input type="text" id="input-02" class="slds-input" />
      </div>
    </div>
  </div>
</fieldset>
<fieldset class="slds-form--compound">
  <legend class="slds-form-element__label slds-text-title--caps">Address</legend>
  <div class="slds-form-element__group">
    <div class="slds-form-element__row">
      <div class="slds-form-element slds-size--1-of-1">
        <label class="slds-form-element__label" for="input-03">Street</label>
        <input type="text" id="input-03" class="slds-input" />
      </div>
    </div>
    <div class="slds-form-element__row">
      <div class="slds-form-element slds-size--1-of-2">
        <label class="slds-form-element__label" for="input-04">City</label>
        <input type="text" id="input-04" class="slds-input" />
      </div>
      <div class="slds-form-element slds-size--1-of-2">
        <label class="slds-form-element__label" for="input-05">State</label>
        <input type="text" id="input-05" class="slds-input" />
      </div>
    </div>
    <div class="slds-form-element__row">
      <div class="slds-form-element slds-size--1-of-2">
        <label class="slds-form-element__label" for="input-06">ZIP Code</label>
        <input type="text" id="input-06" class="slds-input" />
      </div>
    </div>
  </div>
</fieldset>
    
   </div>
</aura:component>